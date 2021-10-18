function testCase() {
    clock = new AlarmClock();
    clock.addClock("16:45", () => console.log(`Первый звонок.`), 1);

    clock.addClock("16:46", () => {
        console.log(`Второй звонок.`);
        clock.removeClock(2);
    }, 2);

    clock.addClock("16:47", () => {
        console.log(`Третий звонок.`);
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);

    clock.printAlarms();

    clock.start();
}

testCase();
