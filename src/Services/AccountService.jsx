import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/account";

class AccountService {
    // Fetch all accounts
    getAllAccounts() {
        return axios.get(`${ACCOUNT_API_BASE_URL}/getAll`);
    }
    
    // Fetch a single account by ID
    getAccountById(accountID) {
        return axios.get(`${ACCOUNT_API_BASE_URL}/read${accountID}`);
    }
    
    // Create a new account
    createAccount(account) {
        return axios.post(`${ACCOUNT_API_BASE_URL}/create`, account);
    }
    
    // Update an account
    updateAccount(account) {
        return axios.post(`${ACCOUNT_API_BASE_URL}/update`, account);
    }
    
    // Delete an account
    deleteAccount(accountID) {
        return axios.delete(`${ACCOUNT_API_BASE_URL}/delete${accountID}`);
    }
}

export default new AccountService();