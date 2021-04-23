describe('app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]');
    const cheeseInput = () => cy.get('input[name="cheese"]');
    const pepperoniInput = () => cy.get('input[name="pepperoni"]');
    const olivesInput = () => cy.get('input[name="olives"]');
    const tomatoesInput = () => cy.get('input[name="tomatoes"]');


    const submitBtn = () => cy.get('button');
    

    it('sanity', () => {
        expect (2 + 2).to.equal(4)
    })

   it('correct elements', () => {

    nameInput().should('exist')
    cheeseInput().should('exist')
    pepperoniInput().should('exist')
    olivesInput().should('exist')
    tomatoesInput().should('exist')
    submitBtn().should('exist')
    })

    it('type in inputs', () => {
        nameInput()
        .should('have.value', "")
        .type('name')
        .should('have.value', "name")

    })
    it('check toppings', () => {
        cheeseInput().check()
        pepperoniInput().check()
        olivesInput().check()
        tomatoesInput().check()
    })

    it('submit', () => {
        submitBtn().should('not.be.disabled')
        submitBtn().click()
    })

})