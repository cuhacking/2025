import type { Payload, PayloadRequest } from 'payload';
import { links } from './social-links'

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload;
  req: PayloadRequest;
}): Promise<void> => {
  payload.logger.info('Seeding social media links...');

  // Clear existing entries in the `social-links` collection
  payload.logger.info('— Clearing existing links...');
  await payload.delete({
    collection: 'social-links',
    depth: 0,
    where: {}, // Deletes all entries in the collection
  });

  // Seed new social media links
  payload.logger.info('— Adding new links...');
  // await Promise.all(
  //   links.map((link) =>
  //     payload.create({
  //       collection: 'social-links',
  //       data: {
  //         platform: link.label || link.text,
  //         url: link.url,
  //         description: link.text,
  //       },
  //     }),
  //   ),
  // );

  payload.logger.info('Social media links seeded successfully!');
};
