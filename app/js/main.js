import { homePage } from "./components/TinyRouter/home"
import { noAccessPage } from "./components/TinyRouter/no-access"

const userProfile = {
  "access": true
}

const contentDiv = document.getElementById('content');

function home() {
  contentDiv.innerHTML = homePage();
}

function noAccess() {
  contentDiv.innerHTML = noAccessPage();
}

const loadLandingPage = (profile) => {
  profile.access ? home() : noAccess();
}

document.addEventListener("DOMContentLoaded",  loadLandingPage(userProfile))
