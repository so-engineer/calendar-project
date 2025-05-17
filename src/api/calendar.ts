import { addDays } from 'date-fns';
import { Schedule } from '../types/calendar';

export const getScheduleList = (): Schedule[] => {
  const today = new Date();
  return [
    {
      id: 1,
      title: '予定1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque pariatur maxime explicabo necessitatibus consequuntur dolorum eligendi vitae corporis culpa quis corrupti aliquid, quisquam sunt iste aliquam suscipit obcaecati quam assumenda nemo error esse molestiae cupiditate repellendus. Recusandae maxime neque id! Eius harum, eum aut necessitatibus architecto quia obcaecati fugiat possimus repellat molestiae nobis facilis ad quasi, maiores velit asperiores culpa voluptatibus rem praesentium a. Quia ullam consequatur repellat quidem natus facilis illo, dolorem voluptate dicta. Id voluptatibus quidem officia cupiditate voluptatem, iste a animi aut nostrum maiores, tenetur mollitia sit sed. Nostrum ad impedit rem, saepe deleniti voluptate error!',
      date: today,
    },
    {
      id: 2,
      title: '予定2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque pariatur maxime explicabo necessitatibus consequuntur dolorum eligendi vitae corporis culpa quis corrupti aliquid, quisquam sunt iste aliquam suscipit obcaecati quam assumenda nemo error esse molestiae cupiditate repellendus. Recusandae maxime neque id! Eius harum, eum aut necessitatibus architecto quia obcaecati fugiat possimus repellat molestiae nobis facilis ad quasi, maiores velit asperiores culpa voluptatibus rem praesentium a. Quia ullam consequatur repellat quidem natus facilis illo, dolorem voluptate dicta. Id voluptatibus quidem officia cupiditate voluptatem, iste a animi aut nostrum maiores, tenetur mollitia sit sed. Nostrum ad impedit rem, saepe deleniti voluptate error!',
      date: today,
    },
    {
      id: 3,
      title: '予定3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque pariatur maxime explicabo necessitatibus consequuntur dolorum eligendi vitae corporis culpa quis corrupti aliquid, quisquam sunt iste aliquam suscipit obcaecati quam assumenda nemo error esse molestiae cupiditate repellendus. Recusandae maxime neque id! Eius harum, eum aut necessitatibus architecto quia obcaecati fugiat possimus repellat molestiae nobis facilis ad quasi, maiores velit asperiores culpa voluptatibus rem praesentium a. Quia ullam consequatur repellat quidem natus facilis illo, dolorem voluptate dicta. Id voluptatibus quidem officia cupiditate voluptatem, iste a animi aut nostrum maiores, tenetur mollitia sit sed. Nostrum ad impedit rem, saepe deleniti voluptate error!',
      date: addDays(today, 1),
    },
    {
      id: 4,
      title: '予定4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque pariatur maxime explicabo necessitatibus consequuntur dolorum eligendi vitae corporis culpa quis corrupti aliquid, quisquam sunt iste aliquam suscipit obcaecati quam assumenda nemo error esse molestiae cupiditate repellendus. Recusandae maxime neque id! Eius harum, eum aut necessitatibus architecto quia obcaecati fugiat possimus repellat molestiae nobis facilis ad quasi, maiores velit asperiores culpa voluptatibus rem praesentium a. Quia ullam consequatur repellat quidem natus facilis illo, dolorem voluptate dicta. Id voluptatibus quidem officia cupiditate voluptatem, iste a animi aut nostrum maiores, tenetur mollitia sit sed. Nostrum ad impedit rem, saepe deleniti voluptate error!',
      date: addDays(today, 7),
    },
    {
      id: 5,
      title: '予定5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque pariatur maxime explicabo necessitatibus consequuntur dolorum eligendi vitae corporis culpa quis corrupti aliquid, quisquam sunt iste aliquam suscipit obcaecati quam assumenda nemo error esse molestiae cupiditate repellendus. Recusandae maxime neque id! Eius harum, eum aut necessitatibus architecto quia obcaecati fugiat possimus repellat molestiae nobis facilis ad quasi, maiores velit asperiores culpa voluptatibus rem praesentium a. Quia ullam consequatur repellat quidem natus facilis illo, dolorem voluptate dicta. Id voluptatibus quidem officia cupiditate voluptatem, iste a animi aut nostrum maiores, tenetur mollitia sit sed. Nostrum ad impedit rem, saepe deleniti voluptate error!',
      date: addDays(today, -9),
    },
  ];
};
