var story = [
  { // 0
    title: 'Macbeth project',
    choices: {
      'Start': {
        title: 'You are Macbeth.',
        choices: {
          'Continue': {
            title: 'You kill the rebel Macdonwald. What do you do now?',
            choices: {
              'You leave him there.': {
                jump: 1
              },
              'You bury him in the ground.': {
                jump: 1
              },
              'You unseam him from the nave to the chops, and fix his head upon your battlements.': {
                bravery: 2,
                title: 'Duncan congratulates you for being valiant. He awards you the title of thane of Cawdor.',
                choices: {
                  'Continue': {
                    jump: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  }, { // 1
    title: 'Three witches appear and tell you that you shalt be king hereafter.',
    choices: {
      "You don't believe them at all.": {
        jump: 2
      },
      'You believe them, and you hope that one day Duncan will name you as the next king.': {
        title: "Duncan announces that his son Malcolm will succeed him as king. You realize that Malcolm is a step on which you must fall down or else o'erleap.",
        choices: {
          'You decide to give up on becoming the king.': {
            jump: 2
          },
          'You decide to take power by murdering Duncan.': {
            jump: 3
          }
        }
      },
      'You believe them, and you think about how you might murder Duncan to take his place.': {
        jump: 3
      }
    }
  }, { // 2
    title: 'You soon forget about the witches and their prophecy. You live happily for the rest of your life and die of old age. The people of Scotland remember you as a good person.'
  }, { // 3
    title: 'Duncan will come to your house to visit. You tell Lady Macbeth about this. You and Lady Macbeth plan to murder Duncan on that night.',
    choices: {
      'Continue': {
        title: 'You realize the consequences to murdering Duncan, and decide not to do it. However, Lady Macbeth still wants you to kill him.',
        choices: {
          'You refuse to do the act, and you tell Lady Macbeth why it is bad to murder Duncan.': {
            title: 'You and Lady Macbeth live peacefully for the rest of your lives. However, sometimes you wonder if you made the wrong decision, and what it would be like to be the king.'
          },
          'You refuse to do the act. You tell Lady Macbeth to do it.': {
            guilt: 2,
            title: 'Lady Macbeth murders Duncan and puts the bloody daggers beside his servants.',
            choices: {
              'Continue': {
                jump: 4
              }
            }
          },
          'You are convinced by Lady Macbeth and you proceed to kill Duncan.': {
            fear: 2,
            title: 'While you are waiting, you see a dagger before you. Blood appears on the dagger. You feel a bit afraid but you dismiss the dagger as a hallucination.',
            choices: {
              'Continue': {
                title: 'You murder Duncan. There is a lot of blood.',
                fear: 2,
                guilt: 4,
                choices: {
                  'You are horrified by what you have done and return to find Lady Macbeth, bringing the bloody daggers with you.': {
                    fear: 2,
                    title: "Lady Macbeth brings the daggers to put them beside Duncan's servants.",
                    choices: {
                      'Continue': {
                        jump: 4
                      }
                    }
                  },
                  "You leave the bloody daggers beside Duncan's servants, to make it seem like they have done it.": {
                    jump: 4
                  }
                }
              }
            }
          }
        }
      }
    }
  }, { // 4
    title: 'You are now the king of Scotland. However, you are suspicious of Banquo, since he has seen the witches too.',
    choices: {
      'You send murderers to kill Banquo.': {
        guilt: 2,
        fear: 2,
        title: 'Banquo is killed, but Fleance escapes.',
        choices: {
          'Continue': {
            title: 'The witches show you an apparition that warns you of Macduff.',
            choices: {
              'You send murderers to kill Macduff.': {
                guilt: 2,
                title: 'Macduff is not there. The murderers kill his family.',
                choices: {
                  'Continue': {
                    jump: 5
                  }
                }
              },
              'You take no action.': {
                jump: 5
              }
            }
          }
        }
      },
      "You don't do anything.": {
        title: 'Banquo tells Malcolm and Macduff that you murdered Duncan. They remove you from power and Malcolm becomes the new king.'
      }
    }
  }, { // 5
    title: 'Macduff and Malcolm invade Scotland from England with ten thousand men. Macduff kills you in a duel. Malcolm becomes the new king.'
  }
];
