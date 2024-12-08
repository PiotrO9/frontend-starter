describe('Check if page has a body tag', () => {
	it('should find exist', () => {
		cy.get('body').should('exist');
	});
});
