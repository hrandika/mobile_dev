import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent, Product } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Remove products', () => {
    it('should give 5 when 2 and 3 is given', () => {
      expect(component.add(2, 3)).toEqual(5);
    });

    it('should remove `moniter` from products', () => {
      component.removeProduct('moniter');
      expect(component.products).not.toContain({ name: 'moniter' });
    });

    it('should call `sendEmail`', () => {
      const spy = jest.spyOn(component, 'sendEmail');
      component.removeProduct('moniter');
      expect(spy).toBeCalledWith("Remove moniter")
    });

    it('should remove `moniter` from products', () => {
      const products: Product[] = [{ name: 'moniter' }, { name: 'moniter' }];
      component.products = products;
      component.removeProduct('moniter');
      expect(component.products).not.toContain({ name: 'moniter' });
    });

    it('should remove `moniter` and have `tv` from products', () => {
      const products: Product[] = [
        { name: 'moniter' },
        { name: 'tv' },
        { name: 'iron' },
      ];
      component.products = products;
      component.removeProduct('moniter');

      expect(component.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'tv' }),
          expect.not.objectContaining({ name: 'moniter' }),
        ])
      );
    });
  });

  describe('Send Email', () => {
    it('should send email for `tv`', () => {
      component.sendEmail('tv');
      expect(component.sentEmails).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: 'tv' })])
      );
    });

    it('should not send email for `internal`', () => {
      component.sendEmail('tv');
      expect(component.sentEmails).toEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: 'internal' }),
        ])
      );
    });

    it('should not send email for `internal`', () => {
      component.sendEmail('tv');
      component.sendEmail('internal');
      expect(component.sentEmails).toEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: 'internal' }),
          expect.objectContaining({ name: 'tv' }),
        ])
      );
    });
  });
});
