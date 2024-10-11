import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      {/* Proveedor del contexto de autenticación */}
      <AuthProvider>
        {/* Navegación dinámica dependiendo del estado de autenticación */}
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
