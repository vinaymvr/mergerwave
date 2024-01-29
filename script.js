
function setRole(role) {
    // Update user role display
    document.getElementById('role-name').textContent = role;

    // Hide all dashboards
    document.querySelectorAll('.dashboard').forEach(dashboard => {
        dashboard.classList.add('hidden');
    });

    // Show relevant dashboard based on role
    document.getElementById(`${role}-dashboard`).classList.remove('hidden');
}

function requestLoan() {
    // Dummy function to illustrate requesting a loan
    const loanRequestsDiv = document.getElementById('loan-requests');
    const requestDiv = document.createElement('div');
    requestDiv.textContent = 'Loan Requested at ' + new Date().toLocaleTimeString();
    loanRequestsDiv.appendChild(requestDiv);
}
