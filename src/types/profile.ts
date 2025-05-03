
// Типы для профиля пользователя
export interface ProfileStats {
  name: string;
  age: string;
  achievementPoints: number;
  completedTests: number;
  completedVideos: number;
  studyMaterials: number;
}

export interface ProgressItem {
  label: string;
  value: number;
}

export interface StatItem {
  label: string;
  value: number;
  icon?: string;
}

export interface Award {
  icon: string;
  bgColor: string;
  textColor: string;
  name: string;
}

export interface SkillRating {
  name: string;
  rating: number;
}

// Типы для компонента тренера
export interface Coach {
  name: string;
  title: string;
  rating: number;
  photoUrl: string;
}
