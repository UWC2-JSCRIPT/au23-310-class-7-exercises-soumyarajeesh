describe("Blackjack Game", () => {
    describe("CardPlayer", () => {
        it("should create a player with a name and an empty hand", () => {
            let player = new CardPlayer('Player');
            expect(player.name).toBe('Player');
            expect(player.hand.length).toBe(0);
        });
  
        it("should draw a card to the player's hand", () => {
            let player = new CardPlayer('Player');
            player.drawCard();
            expect(player.hand.length).toBeGreaterThan(0);
        });
    });
  
    describe("calcPoints", () => {
        it("should calculate the score of a hand correctly", () => {
            let hand = [{ displayVal: 'Ace', val: 1 }, { displayVal: 'King', val: 10 }];
            let score = calcPoints(hand);
            expect(score.total).toBe(21);
            expect(score.isSoft).toBe(true);
        });
    });
  
    describe("dealerShouldDraw", () => {
        it("should return true if dealer should draw a card", () => {
            let dealerHand = [{ displayVal: 'Ace', val: 1 }, { displayVal: '5', val: 5 }];
            expect(dealerShouldDraw(dealerHand)).toBe(true);
        });
    });
  
    describe("determineWinner", () => {
        it("should determine the correct winner", () => {
            expect(determineWinner(21, 20)).toMatch(/You win!/);
            expect(determineWinner(20, 21)).toMatch(/You lose!/);
            expect(determineWinner(20, 20)).toMatch(/Tie!/);
        });
    });
  
    // Additional tests for getMessage, showHand, startGame...
  });
  
  