import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  async set(key: string, value: boolean): Promise<void> {
    localStorage.setItem(key, String(value));
  }

  async get(key: string): Promise<boolean> {
    return localStorage.getItem(key) === 'true';
  }
}
