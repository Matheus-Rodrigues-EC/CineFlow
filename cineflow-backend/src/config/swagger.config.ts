import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('CineFlow API')
  .setDescription('Cinema Reservation System')
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Informe o token JWT',
    },
    'JWT-auth',
  )
  .build();
