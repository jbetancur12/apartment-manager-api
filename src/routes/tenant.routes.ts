import { Router } from 'express'
import {
  createTenant,
  deleteTenant,
  getTenant,
  getTenants,
  updateTenant
} from '../controllers/tenant.controllers'

const router = Router()

router.route('/tenants').get(getTenants)

router
  .route('/tenants/:id')
  .get(getTenant)
  .post(createTenant)
  .put(updateTenant)
  .delete(deleteTenant)

export default router
