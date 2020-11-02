import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 *
 * Android com Emulador: executar comando "adb reverse tcp:3333 tcp:3333" para redirecionar a porta localhost do computador para a maquina virtual do android
 *      localhost (utilizando adb reverse)
 *
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */
