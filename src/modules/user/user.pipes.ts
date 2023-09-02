import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseOrderPipeUsers implements PipeTransform {
  transform(value: string): string | null {
    if (!value) {
      return null;
    }

    if (value.toLowerCase() === 'asc' || value.toLowerCase() === 'desc') {
      return value;
    }

    throw new BadRequestException("Order must be included in ['ASC', 'DESC']");
  }
}

@Injectable()
export class ParseOrderByPipeUsers implements PipeTransform {
  transform(value: string): string | null {
    const orderByUsers = [
      'name',
      'role',
      'email',
      'phone',
      'createdAt',
      'updatedAt',
    ];

    if (!value) {
      return null;
    }

    if (orderByUsers.filter((orderBy) => orderBy === value)[0]) {
      return value;
    }

    throw new BadRequestException(
      `OrderBy must be included in ${orderByUsers.toString()}`,
    );
  }
}
