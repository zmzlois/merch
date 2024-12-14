
    export type RemoteKeys = 'MobileCart/CartNavigator';
    type PackageType<T> = T extends 'MobileCart/CartNavigator' ? typeof import('MobileCart/CartNavigator') :any;