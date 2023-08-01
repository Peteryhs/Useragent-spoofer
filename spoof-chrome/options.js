let siteInput = document.querySelector('#site');
let addButton = document.querySelector('#add');
let whitelist = document.querySelector('#whitelist');

// load the whitelist from storage and display it
browser.storage.local.get('whitelist').then((result) => {
  let sites = result.whitelist || [];
  sites.forEach((site) => {
    let li = document.createElement('li');
    li.textContent = site;
    whitelist.appendChild(li);
  });
}, (error) => {
  console.log(`Error: ${error}`);
});

// add the site to the whitelist when the button is clicked
addButton.addEventListener('click', () => {
  let site = siteInput.value;
  siteInput.value = '';

  // add the site to the displayed whitelist
  let li = document.createElement('li');
  li.textContent = site;
  whitelist.appendChild(li);

  // add the site to the stored whitelist
  browser.storage.local.get('whitelist').then((result) => {
    let sites = result.whitelist || [];
    sites.push(site);
    browser.storage.local.set({whitelist: sites});
  }, (error) => {
    console.log(`Error: ${error}`);
  });
});
