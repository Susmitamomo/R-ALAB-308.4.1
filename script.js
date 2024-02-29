// Function to parse CSV string into an array of rows
function parseCSV(csvString) {
    let rows = csvString.split('\n');
    return rows.map(row => row.split(','));
}

// Parse CSV string into array of arrays
const csvData = parseCSV(`ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`);

// Transform CSV data into array of objects
function csvToObjectArray(csvString) {
    const [headings, ...data] = parseCSV(csvString);
    return data.map(row => {
        let obj = {};
        headings.forEach((heading, index) => {
            obj[heading] = row[index];
        });
        return obj;
    });
}

// Cache the two-dimensional array for later use
const csvObjectArray = csvToObjectArray(`ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`);

// Transform the array of arrays into an array of objects
function transformData(data) {
    const [headings, ...rows] = data;
    return rows.map(row => {
        let obj = {};
        headings.forEach((heading, index) => {
            obj[heading.toLowerCase()] = row[index];
        });
        return obj;
    });
}

// Transform the CSV data into objects
const transformedData = transformData(csvData);

// Remove the last element from the sorted array
transformedData.pop();

// Insert object at index 1
const newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
transformedData.splice(1, 0, newObj);

// Add new object to the end of the array
const newObj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
transformedData.push(newObj2);

// Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < transformedData.length; i++) {
    totalAge += parseInt(transformedData[i].age);
}
const averageAge = totalAge / transformedData.length;
console.log("Average Age:", averageAge);

// Function to convert objects to CSV format
function objectsToCSV(objects) {
    let csv = '';
    const keys = Object.keys(objects[0]);
    csv += keys.join(',') + '\n';
    objects.forEach(obj => {
        csv += keys.map(key => obj[key]).join(',') + '\n';
    });
    return csv;
}

// Convert transformed data back to CSV format
const csvOutput = objectsToCSV(transformedData);
console.log("CSV Output:\n", csvOutput);

