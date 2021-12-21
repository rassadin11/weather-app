export function ChangeCssRootVariables(theme) {
  const components = ['--components-background', '--card-background', '--card-shadow', '--text-color', '--body-background']

  let root = document.querySelector(':root');

  components.forEach(component => {
    return root.style.setProperty(`${component}-default`, `var(${component}-${theme ? 'light' : 'dark'})`)
  })
}