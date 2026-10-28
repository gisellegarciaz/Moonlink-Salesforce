
import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import USER_ID from '@salesforce/user/Id';

import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/User.Name';

import getDashboardData
    from '@salesforce/apex/MoonlinkSupportHomeController.getDashboardData';

const USER_FIELDS = [NAME_FIELD];

export default class MoonlinkCrmHome extends NavigationMixin(
    LightningElement
) {
    // =========================
    // USUÁRIO LOGADO
    // =========================

    userId = USER_ID;

    @wire(getRecord, {
        recordId: '$userId',
        fields: USER_FIELDS
    })
    userRecord;

    get userName() {
        const fullName = getFieldValue(
            this.userRecord?.data,
            NAME_FIELD
        );

        return fullName
            ? fullName.split(' ')[0]
            : 'bem-vinda';
    }

    // =========================
    // INDICADORES DO CRM
    // =========================

    leadCount = 0;
    opportunityCount = 0;
    customerCount = 0;

    isLoading = true;
    dashboardError;

    // =========================
    // CARREGAMENTO DOS DADOS
    // =========================

    connectedCallback() {
        this.loadDashboard();
    }

    async loadDashboard() {
        this.isLoading = true;
        this.dashboardError = undefined;

        try {
            const data = await getDashboardData();

            this.leadCount = data?.leadsCount ?? 0;
            this.opportunityCount =
                data?.opportunitiesCount ?? 0;
            this.customerCount =
                data?.activeClientsCount ?? 0;

            console.log('Dashboard CRM Moonlink:', data);
        } catch (error) {
            console.error(
                'Erro ao carregar indicadores do CRM:',
                error
            );

            this.dashboardError =
                'Não foi possível carregar os indicadores do CRM.';
        } finally {
            this.isLoading = false;
        }
    }

    // =========================
    // NAVEGAÇÃO
    // =========================

    navigateToObject(objectApiName, actionName = 'list') {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName,
                actionName
            }
        });
    }

    handleViewLeads() {
        this.navigateToObject('Lead');
    }

    handleNewLead() {
        this.navigateToObject('Lead', 'new');
    }

    handleNewCustomer() {
        this.navigateToObject('Customer', 'new');
    }

    handleNewOpportunity() {
        this.navigateToObject('Oportunidade__c', 'new');
    }
}
