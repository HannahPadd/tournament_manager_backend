import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { JwtRefreshStrategy } from "./strategies/jwt-refresh.strategy";

export { LocalStrategy };
export { JwtStrategy };
export { JwtRefreshStrategy };

export const Strategies = [
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy
]