"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a constant object to hold account types with these properties.

const accountTypes = {
    NORMAL: "Brukerkonto",
    SAVING: "Sparekonto",
    CREDIT: "Kreditkonto",
    PERSON: "Pensionkonto"
}

printOut(Object.values(accountTypes).join(", "))

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a bank account class

class TAccount {
    constructor(accountType) {
        this.type = accountType;
        this.balance = 0
    }

    // toString method to return the account type
    toString() {
        return `My account: ${this.type}`;
    }

    // setType method to update the account type
    setType(newType) {
        printOut(`Account type changed from ${this.type} to ${newType}`);
        this.type = newType;
    }
}

// Create a constant instance of TAccount
const myAccount = new TAccount("Brukskonto");

// Display the initial account type
printOut(myAccount.toString());

// Change the account type to "Saving"
myAccount.setType("Sparekonto");

// Display the updated account type
printOut(myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//"getBalance" should return the account balance. "deposit" should increase the balance by a given amount and print the amount and the new balance. "withdraw" should decrease the balance by a given amount and print the amount and the new balance.

class Account {
    constructor(initialBalance = 0) {
      // Initialize the account balance
      this.balance = initialBalance;
    }
  
    // Method to get the account balance
    getBalance() {
      return this.balance;
    }
  
    // Method to deposit money into the account
    deposit(amount) {
      if (amount <= 0) {
        printOut('Deposit amount must be positive.');
        return;
      }
      this.balance += amount;
      printOut(`Deposited: $${amount}. New Balance: $${this.balance}.`);
    }
  
    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount <= 0) {
        printOut('Withdrawal amount must be positive.');
        return;
      }
      if (amount > this.balance) {
        printOut('Insufficient funds.');
        return;
      }
      this.balance -= amount;
      printOut(`Withdrew: $${amount}. New Balance: $${this.balance}.`);
    }
  }
  
  // Example usage
  const thisAccount = new Account(); // Create an account with an initial balance of $100
  
  thisAccount.getBalance(100); 
  thisAccount.deposit(100);  
  thisAccount.withdraw(30);
  thisAccount.withdraw(30); 
  thisAccount.withdraw(200); // Attempts to withdraw $200, prints: "Insufficient funds."
  printOut(`Final Balance: $${thisAccount.getBalance()}`); 


  

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed*/

class Accounts {
    constructor(type, balance = 75) {
      this.type = type;  // Set the account type during initialization
      this.balance = balance;  // Set initial balance, default is 0
    }
  
    // toString method returns the account type
    toString() {
      return this.type;
    }
  
    // setType method to change the account type and print the change
    setType(newType) {
      printOut(`Changing account type from ${this.type} to ${newType}`);
      this.type = newType;
      this.withdrawalCount = 0;
    }
  
    // getBalance method returns the current balance
    getBalance() {
      return this.balance.toFixed(2);  // Return balance with 2 decimal places
    }
  
    // deposit method increases the balance and prints the transaction
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.withdrawalCount = 0;
        printOut(`Depositing ${amount} - New balance: ${this.getBalance()}`);
      } else {
       printOut("Deposit amount must be greater than zero.");
      }
    }
  
    // withdraw method decreases the balance and prints the transaction
    withdraw(amount) {
        if (this.type === "Pensjonkonto") {
            printOut("Withdrawals are not allowed for Pensjonkonto (Pension account).");
            return;
          }
      
          if (this.type === "Sparekonto" && this.withdrawalCount >= 3) {
            printout("You cannot make more than 3 withdrawals from a Sparekonto.");
            return;
          }
          
          if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            this.withdrawalCount++;
            printOut(`Withdrawing ${amount} - New balance: ${this.getBalance()}`);
          } else {
           printOut("Insufficient funds or invalid withdrawal amount.");
          }
        }
    }


  
  
  // Test the Account Balance and Transactions methods
  
  const userAccount = new Accounts("sparekonto");  // Initial balance of 100
  printOut(userAccount.getBalance());
  printOut(userAccount.toString());
  
  userAccount.deposit(25); 
  userAccount.withdraw(30);
  userAccount.withdraw(30);
  userAccount.withdraw(30);
  userAccount.withdraw(10);
 
  userAccount.setType("Pensjonskonto");
 
  userAccount.setType("Sparekonto"); 
  
  
  
 
 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Add a private currency type to the account class and set the default value to "NOK"

class BankAccount {
    #currencyType; // Private field to store the currency type
    #balance; // Private field to store the account balance

    constructor() {
        this.#currencyType = "NOK"; // Default currency type
        this.#balance = 0; // Default balance
    }

    // Public method to set the currency type
    setCurrencyType(newCurrency) {
        if (newCurrency === this.#currencyType) {
            return; // Do nothing if the currency is the same
        }
        this.#currencyType = newCurrency; // Update to the new currency
    }

    toString() {
        return this.type;
      }

    // Public method to make a deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // Add amount to the balance
            printOut(`Deposited ${amount} ${this.#currencyType}. New balance: ${this.#balance} ${this.#currencyType}`);
        } else {
            printOut("Deposit amount must be greater than zero.");
        }
    }

    // Public method to display the account balance
    getBalance() {
        return `${this.#balance} ${this.#currencyType}`;
    }

}

// Example usage
const customerAccount = new BankAccount();

// Deposit 150
customerAccount.deposit(150); // Outputs: Deposited 150 NOK. New balance: 150 NOK

// Attempt to change to the same currency
customerAccount.setCurrencyType("NOK"); // No change, no output

// Change the currency type to "USD"
customerAccount.setCurrencyType("USD");

// Check the balance after changing the currency (Note: currency change doesn't affect the balance)
printOut(customerAccount.getBalance());


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Expand the account class with a private method that converts from one currency to another.

class privatAccount {
    #balance;
    #currency;
  
    constructor(initialBalance, currency) {
      this.#balance = initialBalance;
      this.#currency = currency;
    }
  
    // Private method for currency conversion
    #convertCurrency(amount, fromCurrency, toCurrency) {
      const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, NOK: 11.38},
        EUR: { USD: 1.18, GBP: 0.88, NOK: 11.68},
        GBP: { USD: 1.33, EUR: 1.14, NOK: 14.08},
      };
  
      if (fromCurrency === toCurrency) return amount;
  
      const rate = exchangeRates[fromCurrency]?.[toCurrency];
      if (!rate) throw new Error(`Unsupported currency conversion from ${fromCurrency} to ${toCurrency}`);
  
      return amount * rate;
    }
  

    // Method to change the currency of the account
    changeCurrency(newCurrency) {
      if (this.#currency !== newCurrency) {
        this.#balance = this.#convertCurrency(this.#balance, this.#currency, newCurrency);
        this.#currency = newCurrency;
      }
    }
  
    // Method to deposit funds
    deposit(amount) {
      if (amount <= 0) throw new Error('Deposit amount must be greater than zero.');
      this.#balance += amount;
    }
  
    // Method to withdraw funds
    withdraw(amount) {
      if (amount <= 0) throw new Error('Withdrawal amount must be greater than zero.');
      if (amount > this.#balance) throw new Error('Insufficient funds.');
      this.#balance -= amount;
    }
  
    // Method to get balance
    getBalance() {
      return `${this.#currency} ${this.#balance.toFixed(2)}`;
    }
  }
  
  // Example Usage
  const oneAccount = new privatAccount(1000, 'USD');
  printOut(oneAccount.getBalance()); // USD 1000.00
  
  oneAccount.changeCurrency("EUR");
  printOut(oneAccount.getBalance());

  
  oneAccount.changeCurrency("NOK");
  printOut(oneAccount.getBalance());
  


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type.

class currencyAccount {
    constructor(balance = 0.00, currency = 'NOK') {
        this.balance = balance;
        this.currency = currency;
    }



    deposit(amount, currency = 'NOK') {
        this.balance += amount;
        printOut(`Deposited ${amount} ${currency}. New balance: ${this.balance} ${this.currency}`);
    }

    withdraw(amount, currency = 'NOK') {
        if (this.balance >= amount) {
            this.balance -= amount;
            printOut(`Withdrew ${amount} ${currency}. New balance: ${this.balance} ${this.currency}`);
        } else {
            printOut(`Insufficient balance. Available balance: ${this.balance} ${this.currency}`);
        }
    }

    changeCurrency(newCurrency) {
        this.currency = newCurrency;
        printOut(`Currency changed to ${this.currency}.`);
    }

    getBalance() {
        return `${this.balance} ${this.currency}`;
    }
}

// Example usage:
const twoAccount = new currencyAccount(200);

// Deposit 12 USD
twoAccount.deposit(12, 'USD');

// Withdraw 10 GBP
twoAccount.withdraw(10, 'GBP');

// Change account currency to EUR
twoAccount.changeCurrency('EUR');

// Deposit 5 EUR
twoAccount.deposit(5, 'EUR');

// Withdraw remaining balance in a different currency (NOK)
twoAccount.changeCurrency('NOK');
twoAccount.withdraw(twoAccount.balance, 'NOK');  // Withdraw the rest

// Final balance
printOut(`Final balance: ${twoAccount.getBalance()}`);


printOut(newLine);
