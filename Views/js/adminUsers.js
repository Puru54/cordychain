fetch('https://cordychain.onrender.com/api/v1/bafra')
    .then((jsonData) => {
        return jsonData.json();
    })
    .then((objectData) => {
        console.log("data", objectData.data[0]);
        console.log(objectData.data.length);
        let i = 1;
        var divdata = "";
        var details = "";
        objectData.data.map((value) => {
            console.log(value.name1);
            divdata += `
                <tr>
                    <td>${value.name1}</td>
                    <td>${value.bafraId1}</td>
                    <td><button class="btn btn-danger" onclick="removeUser(${value._id})">Remove</button></td>
                </tr>`;
            i++;
        });
        document.querySelector(".authBAFRA").innerHTML = divdata;
    });

function removeUser(_id) {
    // Perform the necessary logic to remove the user with the specified bafraId
    console.log("Removing user with bafraId:", bafraId);

    // Make an API call to delete the user with the specified bafraId
    fetch(`https://cordychain.onrender.com/api/v1/bafra/${bafraId}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                console.log("User deleted successfully");
                // Reload the data or update the displayed table accordingly
                fetchDataAndUpdateTable();
            } else {
                console.log("Error deleting user");
            }
        })
        .catch((error) => {
            console.log("Error deleting user:", error);
        });
}

function fetchDataAndUpdateTable() {
    fetch('https://cordychain.onrender.com/api/v1/bafra')
        .then((jsonData) => {
            return jsonData.json();
        })
        .then((objectData) => {
            console.log("data", objectData.data[0]);
            console.log(objectData.data.length);
            let i = 1;
            var divdata = "";
            var details = "";
            objectData.data.map((value) => {
                console.log(value.name1);
                divdata += `
                    <tr>
                        <td>${value.name1}</td>
                        <td>${value.bafraId1}</td>
                        <td><button class="btn btn-danger" onclick="removeUser(${value.bafraId1})">Remove</button></td>
                    </tr>`;
                i++;
            });
            document.querySelector(".authBAFRA").innerHTML = divdata;
        });
}
