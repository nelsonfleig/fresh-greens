import 'dotenv/config';
import 'reflect-metadata';
import Container from 'typedi';
import { Application } from './application';

const app = Container.get(Application);
app.start();
