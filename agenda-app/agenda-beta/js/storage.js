class Storage {
    static getCards() {
        return JSON.parse(localStorage.getItem("cards")) || [];
    }

    static saveCards(cards) {
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    static addCard(card) {
        const cards = Storage.getCards();
        cards.push(card);
        Storage.saveCards(cards);
    }

    static updateCard(updatedCard) {
        const cards = Storage.getCards().map(c => c.id === updatedCard.id ? updatedCard : c);
        Storage.saveCards(cards);
    }

    static deleteCard(cardId) {
        const cards = Storage.getCards().filter(c => c.id !== cardId);
        Storage.saveCards(cards);
    }
}

export { Storage };

