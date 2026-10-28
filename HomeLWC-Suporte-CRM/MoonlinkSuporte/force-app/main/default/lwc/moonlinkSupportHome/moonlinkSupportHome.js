import { LightningElement, wire } from 'lwc';

import USER_ID from '@salesforce/user/Id';

import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';

import USER_NAME from '@salesforce/schema/User.Name';

import getDashboardData
    from '@salesforce/apex/MoonlinkSupportHomeController.getDashboardData';


export default class MoonlinkSupportHome extends LightningElement {

    // =========================
    // USUÁRIO LOGADO ON
    // =========================

    @wire(getRecord, {
        recordId: USER_ID,
        fields: [USER_NAME]
    })
    userRecord;


    get operatorName() {

        return getFieldValue(
            this.userRecord?.data,
            USER_NAME
        ) || 'Operador';

    }
    // =========================
    // USUÁRIO LOGADO PRA DEPOIS DAS PERMISSÕES
    // =========================

//     @wire(getRecord, {
//         recordId: USER_ID,
//         fields: [USER_NAME]
//     })
//     userRecord;


//     get operatorName() {
//     const fullName = getFieldValue(
//         this.userRecord?.data,
//         USER_NAME
//     );

//     return fullName?.split(' ')[0] || 'Operador';
// }




    // =========================
    // ESTADO
    // =========================

    openCount = 0;

    urgentCount = 0;

    inProgressCount = 0;

    isLoading = true;

    error;


    // =========================
    // CARREGAMENTO
    // =========================

    connectedCallback() {

        this.loadDashboard();

    }


    async loadDashboard() {

        this.isLoading = true;

        this.error = undefined;


        try {

            const data =
                await getDashboardData();


            this.openCount =
                data.openCount ?? 0;


            this.urgentCount =
                data.urgentCount ?? 0;


            this.inProgressCount =
                data.inProgressCount ?? 0;


            console.log(
                'Dashboard Moonlink:',
                data
            );


        } catch (error) {

            console.error(
                'Erro ao carregar dashboard:',
                error
            );


            this.error =
                'Não foi possível carregar os dados dos atendimentos.';


        } finally {

            this.isLoading = false;

        }

    }


    // =========================
    // AÇÕES
    // =========================

    handleNewAttendance() {

        console.log(
            'Novo atendimento'
        );

    }


    handleLyra() {

        console.log(
            'Abrir Lyra'
        );

    }


    handleViewAll() {

        console.log(
            'Ver todos os atendimentos'
        );

    }

}