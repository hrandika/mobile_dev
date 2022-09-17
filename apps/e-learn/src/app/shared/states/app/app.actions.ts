export class ChangeUser {
  static readonly type = '[App] Change User';
  constructor(public user: string) {}
}

export class ChangeLoading {
  static readonly type = '[App] Change Loading';
  constructor(public loading: boolean) {}
}
