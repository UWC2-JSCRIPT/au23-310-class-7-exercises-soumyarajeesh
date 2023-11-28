describe("getTotalPoints", () => {
    it("should correctly calculate total points from a string of results", () => {
        expect(getTotalPoints('wwdlw')).toBe(10); // 3 + 3 + 1 + 0 + 3
        expect(getTotalPoints('llld')).toBe(1);   // 0 + 0 + 0 + 1
        expect(getTotalPoints('')).toBe(0);       // Empty string
    });
});
describe("orderTeams", () => {
    it("should correctly order teams and format their points", () => {
        const teams = [
            { name: 'Team A', results: 'wwd' },  // 7 points
            { name: 'Team B', results: 'lld' },  // 1 point
            { name: 'Team C', results: 'www' }   // 9 points
        ];
        const expectedOutput = 'Team A: 7\nTeam B: 1\nTeam C: 9';
        expect(orderTeams(...teams)).toBe(expectedOutput);
    });

    it("should handle an empty array of teams", () => {
        expect(orderTeams()).toBe('');
    });
});
