import { AngularModuleStarter } from '../app/module';

describe('AngularModuleStarter', () => {
    describe('add', () => {
        it('should add', () => {
            expect(AngularModuleStarter.add(1, 1)).toBe(2);
        });
    });
});
