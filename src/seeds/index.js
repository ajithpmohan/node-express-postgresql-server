import models from '../models';

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'ajithpmohan',
      messages: [
        {
          text: 'Developed a Node Express PostgreSQL Server',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );

  await models.User.create(
    {
      username: 'regipmohan',
      messages: [
        {
          text: 'Happy to release ...',
        },
        {
          text: 'Published a complete ...',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );
};

export default createUsersWithMessages;
