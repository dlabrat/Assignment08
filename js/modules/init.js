// FETCH EMPLOYEE DATA, ASYNC/AWAIT
async function fetchEmployeeData() {
    try {
        const response = await fetch('../data/employees.json')
        const data = await response.json() //parsing
        return data.employees
    } catch (error) {
        console.error('Error fetching employee data:', error)
    }
}

// GRID BUILD
async function init() {
    const employeeData = await fetchEmployeeData() 
    buildGrid(employeeData)
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS 
init()
