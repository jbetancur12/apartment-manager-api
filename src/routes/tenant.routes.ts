import { Router } from 'express'
import {
  createTenant,
  deleteTenant,
  getTenant,
  getTenants,
  updateTenant
} from '../controllers/tenant.controllers'

const router = Router()

router.route('/tenants').get(getTenants).post(createTenant)

router
  .route('/tenants/:id')
  .get(getTenant)
  .put(updateTenant)
  .delete(deleteTenant)

export default router
