
export function SaveDataToLocalStorage(data)
{
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('data')) || [];
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('data', JSON.stringify(a));
}