import { MockBuilder, MockRender } from 'ng-mocks';

import { IfAuthenticatedDirective } from './if-authenticated.directive';

describe('IfAuthenticatedDirective', () => {
  beforeEach(() => MockBuilder(IfAuthenticatedDirective));

  it('should hide and render its content', () => {
    const fixture = MockRender(
      `
        <div *appIfAuthenticated="authenticated">
          content
        </div>
    `,
      {
        authenticated: false,
      }
    );
    expect(fixture.nativeElement.innerHTML).not.toContain('content');

    fixture.componentInstance.authenticated = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('content');

    fixture.componentInstance.authenticated = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).not.toContain('content');
  });
});
