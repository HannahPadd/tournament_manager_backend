import { AuthGuard } from "./guards/auth.guard";
import { RolesGuard } from "./guards/roles.guard";

export { AuthGuard };
export { RolesGuard };

export const Guards = [
    AuthGuard,
    RolesGuard
]