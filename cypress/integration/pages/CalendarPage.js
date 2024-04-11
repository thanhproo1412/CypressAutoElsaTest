class LoginPage {

  
  getListAgendaBtn() {
    return cy.get('div[class="v2-dropdown list-agenda"]');
  }

  getListAgenda() {
    return cy.get('div[class="v2-dropdown list-agenda active"] ul');
  }

  getAgenda(agenda) {
    return cy.get('div[class="v2-dropdown list-agenda active"] ul').contains(agenda);
  }

  getCalendarTime(time) {
    return cy.get(`td[data-time="${time}"][class="fc-timegrid-slot fc-timegrid-slot-lane "]`);
  }

  getToolipAddJob() {
    return cy.get(`div[id="tooltip-add-job"]`);
  }

  getAddJob(addJobType) {
    return cy.get('div[class="wrap-addjob-menu__items"]').contains(addJobType);
  }

  //--------------------- Job Detail ---------------------------------
  //Get Customer
  getSearchCustomer() {
    return cy.get('div[id="show_list_customer_dropdown"] input[placeholder="Search Customers"]');
  }
  getSearchCustomerList() {
    return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]');
  }
  getCustomerInList(name) {
    return cy.get('div[id="show_list_customer_dropdown"] div[class="v2-dropdown__menu content-user content-full scrolls"]').contains(name);
  }

  // Get Location
  getLocation() {
    return cy.get('div[id="location_id"] div[class="dropbtn items"]');
  }
  getLocationList() {
    return cy.get('div[id="location_id"] div[id="show_list_dropdown"]');
  }
  getLocationInList(name) {
    return cy.get('div[id="location_id"] div[id="show_list_dropdown"]').contains(name);
  }


  //Get Service
  getSearchService() {
    return cy.get('div[id="show_list_services"] input');
  }
  getSearchServiceList() {
    return cy.get('div[id="show_list_services"] div[class="v2-dropdown__menu content-full scrolls"]');
  }
  getServiceInList(name) {
    return cy.get('div[id="show_list_services"] div[class="v2-dropdown__menu content-full scrolls"]').contains(name);
  }


  getInputDate() {
    return cy.get('div[class="react-datepicker-wrapper"] input');
  }

  //Btn Save
  getBtnSave() {
    return cy.get('div[class="v2-btn-main "]')
  }

  //Btn Close
  getBtnClose() {
    return cy.get('div[class="btn-action btn-close"]')
  }

  // loadding animation
  getLoaddingAnimation() {
    return cy.get('div[class="loading v2-btn-default --grey btn-lg"]')

  }

}

export default LoginPage;