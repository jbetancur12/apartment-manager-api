import { Request, Response } from 'express'
import { Tenant } from '../entities/Tenant'

type TResponse = Promise<Response<any, Record<string, any>> | undefined>

export const createTenant = async (req: Request, res: Response): TResponse => {
  try {
    const { doc, firstName, lastName, address, email, phone } = req.body

    const tenant = new Tenant()

    tenant.doc = doc
    tenant.firstName = firstName
    tenant.lastName = lastName
    tenant.address = address
    tenant.email = email
    tenant.phone = phone

    await tenant.save()

    return res.json(tenant)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getTenants = async (req: Request, res: Response): TResponse => {
  try {
    const tenants = await Tenant.find()
    return res.json(tenants)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateTenant = async (req: Request, res: Response): TResponse => {
  try {
    const { id } = req.params

    const tenant = await Tenant.findOneBy({ id: parseInt(req.params.id) })

    if (tenant == null) {
      return res.status(400).json({ message: 'Tenant does not exist' })
    }

    await Tenant.update({ id: parseInt(id) }, req.body)
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteTenant = async (req: Request, res: Response): TResponse => {
  try {
    const { id } = req.params

    const result = await Tenant.delete({ id: parseInt(id) })
    if (result.affected === 0) {
      return res.status(404).json({ message: 'Tenant does not exist' })
    }
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getTenant = async (req: Request, res: Response): TResponse => {
  try {
    const { id } = req.params
    const tenant = await Tenant.findOneBy({ id: parseInt(id) })
    if (tenant == null) {
      return res.status(400).json({ message: 'Tenant does not exist' })
    }
    return res.json(tenant)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
