import * as migration_20260223_071216_add_slug_to_posts from './20260223_071216_add_slug_to_posts';
import * as migration_20260223_071937_add_slug_column from './20260223_071937_add_slug_column';

export const migrations = [
  {
    up: migration_20260223_071216_add_slug_to_posts.up,
    down: migration_20260223_071216_add_slug_to_posts.down,
    name: '20260223_071216_add_slug_to_posts',
  },
  {
    up: migration_20260223_071937_add_slug_column.up,
    down: migration_20260223_071937_add_slug_column.down,
    name: '20260223_071937_add_slug_column'
  },
];
