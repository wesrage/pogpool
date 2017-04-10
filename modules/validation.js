import groups from './groups';

export const validatePicks = ({ firstName, lastName, ...picks }) => {
   const validInfo = firstName && lastName;
   const validPicks = groups.every(group => picks[group.id]);
   if (!validInfo && !validPicks) {
      return 'You need to enter your first and last name and make a pick from every group above before you can submit.';
   } else if (!validInfo) {
      return 'You need to enter your first and last name before you can submit.';
   } else if (!validPicks) {
      return 'You need to make a pick from every group above before you can submit.';
   }
   return false;
};
