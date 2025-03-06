export class Sell {
    constructor(userId, customerId, planId, date, state) {
      this.userId = userId;
      this.customerId = customerId;
      this.planId = planId;
      this.date = date;
      this.state = state;
    }
  }