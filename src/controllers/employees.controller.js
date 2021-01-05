const employeeCtrl = {}
 employeeCtrl.getEmployees  = (req,res) => {
     res.send('get employees')
 }
 employeeCtrl.createEmployee  = (req,res) => {
    res.send('create employees')
 }
 employeeCtrl.getEmployee  = (req,res) => {
    res.send('get employee')
 }
 employeeCtrl.updateEmployee  = (req,res) => {
    res.send('update employee')
 }
 employeeCtrl.deleteEmployee  = (req,res) => {
    res.send('delete employee')
 }

module.exports =  employeeCtrl;