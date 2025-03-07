function createTimer(name) {
    return new Promise(resolve => {
      setTimeout(() => resolve(name), 1000);
    });
  }
  async function f() {
    const t1 = createTimer('A');
    const r1 = await t1;
    alert('ええやん');
  }
  export { f };