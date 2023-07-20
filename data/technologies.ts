export interface Technology {
  name: string;
  image: string;
  experience: string;
  techs: string[];
}
export const technologies: Technology[] = [
  {
    name: 'Flutter',
    image: 'flutterSvg',
    experience: '3 years',
    techs: ['Riverpod', 'Firebase', 'Freezed', 'Local Packages'],
  },
  {
    name: 'VueJS',
    image: 'vueSvg',
    experience: '2 years',
    techs: ['Composable', 'Tailwind', 'Pinia', 'Vitest'],
  },
  {
    name: '.Net Core',
    image: 'dotnetLogo',
    experience: '2 years',
    techs: ['REST API', 'EF Core', 'xUnit', 'Moq'],
  },
];
