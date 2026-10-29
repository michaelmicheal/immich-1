import { AuthSharedLink } from 'src/database.js';
import { CryptoRepository } from 'src/repositories/crypto.repository.js';

export const getSharedLinkToken = (
  crypto: Pick<CryptoRepository, 'hashSha256'>,
  { id, password }: Pick<AuthSharedLink, 'id' | 'password'>,
) => crypto.hashSha256(`${id}-${password}`).toString('base64');
