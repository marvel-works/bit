import Watch from './watch';
import LegacyWatch from '../consumer/component-ops/watch-components';

export function provideWatch() {
  return new Watch(new LegacyWatch(true));
}