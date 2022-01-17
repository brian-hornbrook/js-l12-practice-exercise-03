const notRegistered = document.querySelector(".not-registered");

// retrieve registration data
const getRegistrationData = async function () {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await request.json();
    displayContactList(data);
};
getRegistrationData();

// display not registered users
const displayContactList = function (data) {
    data.forEach(user => {
        if (user.registered === "no") {
            const notRegisteredUser = document.createElement("li");
            notRegisteredUser.innerText = user.name;
            notRegistered.append(notRegisteredUser);
        }
    });
};
