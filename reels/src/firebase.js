import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";

import secrets from './components/secrets'


let app = initializeApp(secrets)

export const db = getFirestore(app);

export let auth = getAuth(app)