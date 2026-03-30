
const langselectors = document.querySelectorAll("[name=language]");
const scriptselectors = document.querySelectorAll("[name=script]");
const selectors = [...langselectors,...scriptselectors];
const defaultLanguage = "bilingual";
const defaultScript = "sp";


const applySetting = (savedSetting, setting) => {
    const targets = document.querySelectorAll(`[data-${setting}="${savedSetting}"]`);
    document.documentElement.setAttribute(`data-selected-${setting}`, savedSetting);
    for (let option of targets){
        option.selected = true;
    }
};

const handleThemeSelection = (event) => {
    const target = event.target;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)') && document.documentElement.getAttribute('data-selected-theme') !== 'light';
    const theme = isDark ? 'light' : 'dark';
    applySetting(theme, 'theme');
    sessionStorage.setItem('selected-theme', theme);

}
const handleChange = (savedSetting, setting) => {
    console.log(savedSetting, setting);
    applySetting(savedSetting, setting);
    localStorage.setItem(`selected-${setting}`, savedSetting);
}

const setInitialSettings = () => {
    const savedLanguage = localStorage.getItem('selected-language');
    if (savedLanguage && savedLanguage !== defaultLanguage) {
        applySetting(savedLanguage, "language");
    }
    const savedScript = localStorage.getItem('selected-script');
    if (savedScript && savedScript !== defaultScript) {
        applySetting(savedScript, "script");
    }
    const savedTheme = sessionStorage.getItem('selected-theme');
    if (savedTheme) {
        applySetting(savedTheme, 'theme');
    }
};
const assignListeners = (selects) => {
    for (let select of selects) {
        select.addEventListener("change", (event) => {
            handleChange(event.target.value, event.target.name);
        });
    }
}


setInitialSettings();

console.log("this is");
assignListeners(selectors);
console.log(selectors);
for (let themeSelector of document.querySelectorAll('.theme-selector button')) {
    themeSelector.addEventListener('click', handleThemeSelection);
}

/*
selectElement.addEventListener("change", (event) => {
  result.textContent = `You like ${event.target.value}`;
});*/
