const tabs = document.querySelectorAll('.tab')
const tabsBody = document.querySelectorAll('.tab-body')



for (let tab of tabs) {
   tab.addEventListener('click', () => {
      tabIndex = tab.getAttribute('data-tab')
      
      clearActiveClass()
      tab.classList.add('active')
      tabsBody[tabIndex].classList.add('active')
   })
}

function clearActiveClass() {
   tabs.forEach((tab) => {
      tab.classList.remove('active')
   });
   tabsBody.forEach((tabBody) => {
      tabBody.classList.remove('active')
   })
}