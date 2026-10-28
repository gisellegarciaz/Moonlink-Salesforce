public with sharing class MoonlinkSupportHomeController {

    public class DashboardData {

        @AuraEnabled
        public Integer openCount;

        @AuraEnabled
        public Integer urgentCount;

        @AuraEnabled
        public Integer inProgressCount;
    }


    @AuraEnabled(cacheable=true)
    public static DashboardData getDashboardData() {

        DashboardData data =
            new DashboardData();


        // Atendimentos abertos
        data.openCount = [
            SELECT COUNT()
            FROM Atendimentos__c
            WHERE Status__c = 'Aberto'
        ];


        // Atendimentos urgentes ainda ativos
        data.urgentCount = [
            SELECT COUNT()
            FROM Atendimentos__c
            WHERE Prioridade__c = 'Urgente'
            AND Status__c != 'Fechado'
        ];


        // Atendimentos em atendimento
        data.inProgressCount = [
            SELECT COUNT()
            FROM Atendimentos__c
            WHERE Status__c = 'Em atendimento'
        ];


        return data;
    }

}