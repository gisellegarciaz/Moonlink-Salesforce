
import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import USER_ID from '@salesforce/user/Id';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';

const USER_FIELDS = [NAME_FIELD];

export default class MoonlinkCrmHome extends NavigationMixin(
    LightningElement
) {
    userId = USER_ID;

    leadCount = 0;
    opportunityCount = 0;
    customerCount = 0;

    leads = [];
    isLoading = false;

    @wire(getRecord, {
        recordId: '$userId',
        fields: USER_FIELDS
    })
    userRecord;

    get userName() {
        const fullName = getFieldValue(
            this.userRecord.data,
            NAME_FIELD
        );

        return fullName ? fullName.split(' ')[0] : 'bem-vinda';
    }

    get hasLeads() {
        return this.leads.length > 0;
    }

    get error() {
        return this.userRecord.error;
    }

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
        // Confirme o nome de API do objeto Cliente.
        this.navigateToObject('Cliente__c', 'new');
    }

    handleNewOpportunity() {
        this.navigateToObject('Opportunity', 'new');
    }
}
